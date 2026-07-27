import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-13-pvp-server');
}

export default function Empirebr13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-13-pvp-server" />;
}
