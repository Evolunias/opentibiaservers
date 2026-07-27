import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-ot');
}

export default function TopEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-ot" />;
}
