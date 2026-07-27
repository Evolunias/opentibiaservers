import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-7-4-pvp-server');
}

export default function Empirebr74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-7-4-pvp-server" />;
}
