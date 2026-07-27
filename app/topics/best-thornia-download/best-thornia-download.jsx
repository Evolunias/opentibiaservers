import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-download');
}

export default function BestThorniaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-download" />;
}
