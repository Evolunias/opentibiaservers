import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-non-pvp-ot-server');
}

export default function BestNonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-non-pvp-ot-server" />;
}
