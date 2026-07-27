import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-client');
}

export default function TopEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-client" />;
}
