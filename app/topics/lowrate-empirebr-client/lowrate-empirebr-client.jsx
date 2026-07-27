import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-client');
}

export default function LowrateEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-client" />;
}
