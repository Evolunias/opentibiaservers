import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-pvp-enforced-server');
}

export default function Imperianic14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-pvp-enforced-server" />;
}
