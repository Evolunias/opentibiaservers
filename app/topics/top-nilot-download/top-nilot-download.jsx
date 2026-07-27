import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-download');
}

export default function TopNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-download" />;
}
