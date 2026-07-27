import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-download');
}

export default function BestNilotDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-download" />;
}
