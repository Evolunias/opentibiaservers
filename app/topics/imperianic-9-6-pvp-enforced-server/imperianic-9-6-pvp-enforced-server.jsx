import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-pvp-enforced-server');
}

export default function Imperianic96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-pvp-enforced-server" />;
}
