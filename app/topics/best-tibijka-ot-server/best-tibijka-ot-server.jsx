import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibijka-ot-server');
}

export default function BestTibijkaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibijka-ot-server" />;
}
