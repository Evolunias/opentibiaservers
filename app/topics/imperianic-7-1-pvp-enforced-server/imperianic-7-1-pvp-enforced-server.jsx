import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-pvp-enforced-server');
}

export default function Imperianic71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-pvp-enforced-server" />;
}
