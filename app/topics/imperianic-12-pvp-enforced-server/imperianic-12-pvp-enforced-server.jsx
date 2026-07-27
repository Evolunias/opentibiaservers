import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-pvp-enforced-server');
}

export default function Imperianic12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-pvp-enforced-server" />;
}
