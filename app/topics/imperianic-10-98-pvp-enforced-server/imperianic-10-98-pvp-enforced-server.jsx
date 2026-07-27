import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-98-pvp-enforced-server');
}

export default function Imperianic1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-98-pvp-enforced-server" />;
}
