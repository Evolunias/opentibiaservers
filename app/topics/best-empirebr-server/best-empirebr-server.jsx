import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-server');
}

export default function BestEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-server" />;
}
