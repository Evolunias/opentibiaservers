import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr');
}

export default function LowrateEmpirebrKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr" />;
}
