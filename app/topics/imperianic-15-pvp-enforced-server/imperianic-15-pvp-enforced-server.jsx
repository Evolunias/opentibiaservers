import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-pvp-enforced-server');
}

export default function Imperianic15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-pvp-enforced-server" />;
}
