import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-empirebr-server');
}

export default function NonPvpEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-empirebr-server" />;
}
