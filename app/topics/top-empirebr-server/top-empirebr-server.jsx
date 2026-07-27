import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-server');
}

export default function TopEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-server" />;
}
