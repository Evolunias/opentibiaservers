import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-ot');
}

export default function LowrateEmpirebrOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-ot" />;
}
