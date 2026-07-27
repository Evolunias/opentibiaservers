import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-pvp-enforced-server');
}

export default function Imperianic11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-pvp-enforced-server" />;
}
