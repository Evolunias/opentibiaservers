import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-pvp-enforced-server');
}

export default function Imperianic84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-pvp-enforced-server" />;
}
