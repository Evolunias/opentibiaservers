import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-ot-server');
}

export default function BestTibiascapeOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-ot-server" />;
}
