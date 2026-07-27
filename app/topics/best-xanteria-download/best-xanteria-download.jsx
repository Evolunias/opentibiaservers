import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-download');
}

export default function BestXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-download" />;
}
