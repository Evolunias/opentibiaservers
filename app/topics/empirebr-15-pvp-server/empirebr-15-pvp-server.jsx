import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-15-pvp-server');
}

export default function Empirebr15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-15-pvp-server" />;
}
