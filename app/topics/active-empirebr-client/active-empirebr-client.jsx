import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-client');
}

export default function ActiveEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-client" />;
}
