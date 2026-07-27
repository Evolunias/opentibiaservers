import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-download');
}

export default function CustomNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-download" />;
}
