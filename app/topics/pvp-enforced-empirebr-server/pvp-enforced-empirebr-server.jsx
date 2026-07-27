import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-empirebr-server');
}

export default function PvpEnforcedEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-empirebr-server" />;
}
