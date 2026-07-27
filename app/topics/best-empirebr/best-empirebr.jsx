import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr');
}

export default function BestEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr" />;
}
