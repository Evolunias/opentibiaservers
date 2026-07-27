import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-10-98-pvp-enforced-server');
}

export default function Coxaot1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-10-98-pvp-enforced-server" />;
}
