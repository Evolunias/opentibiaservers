import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-server');
}

export default function ActiveEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-server" />;
}
