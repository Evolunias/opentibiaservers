import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-empirebr-server');
}

export default function PvpEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-empirebr-server" />;
}
