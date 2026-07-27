import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-6-pvp-enforced-server');
}

export default function Imperianic86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-6-pvp-enforced-server" />;
}
