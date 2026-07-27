import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-download');
}

export default function PopularNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-download" />;
}
