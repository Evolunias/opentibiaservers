import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-pvp-enforced-server');
}

export default function Imperianic13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-pvp-enforced-server" />;
}
