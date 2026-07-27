import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-1-pvp-server');
}

export default function Empirebr71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-1-pvp-server" />;
}
