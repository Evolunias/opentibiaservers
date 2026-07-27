import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-pvp-enforced-server');
}

export default function Imperianic74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-pvp-enforced-server" />;
}
