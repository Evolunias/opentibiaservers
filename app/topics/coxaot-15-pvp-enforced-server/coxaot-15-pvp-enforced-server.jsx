import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-15-pvp-enforced-server');
}

export default function Coxaot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="coxaot-15-pvp-enforced-server" />;
}
