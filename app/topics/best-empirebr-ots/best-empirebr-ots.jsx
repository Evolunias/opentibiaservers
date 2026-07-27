import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-ots');
}

export default function BestEmpirebrOtsKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-ots" />;
}
