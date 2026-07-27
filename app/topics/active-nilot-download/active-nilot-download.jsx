import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-download');
}

export default function ActiveNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-download" />;
}
