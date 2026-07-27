import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-ot-server');
}

export default function BestTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-ot-server" />;
}
