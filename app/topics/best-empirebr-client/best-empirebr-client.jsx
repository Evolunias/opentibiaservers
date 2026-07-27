import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-client');
}

export default function BestEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-client" />;
}
