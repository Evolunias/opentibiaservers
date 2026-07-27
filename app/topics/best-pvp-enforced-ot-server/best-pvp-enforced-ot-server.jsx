import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-pvp-enforced-ot-server');
}

export default function BestPvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-pvp-enforced-ot-server" />;
}
