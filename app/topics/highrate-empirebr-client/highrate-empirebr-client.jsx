import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-client');
}

export default function HighrateEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-client" />;
}
