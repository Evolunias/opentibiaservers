import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-ot');
}

export default function BestEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-ot" />;
}
