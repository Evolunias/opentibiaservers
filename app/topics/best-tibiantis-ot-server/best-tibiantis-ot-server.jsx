import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-ot-server');
}

export default function BestTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-ot-server" />;
}
