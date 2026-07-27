import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nostalther-download');
}

export default function BestNostaltherDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-nostalther-download" />;
}
