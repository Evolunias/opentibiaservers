import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-client');
}

export default function CurrentEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-client" />;
}
