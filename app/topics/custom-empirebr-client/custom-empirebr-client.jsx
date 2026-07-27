import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-empirebr-client');
}

export default function CustomEmpirebrClientKeywordPage() {
  return <StaticKeywordPage slug="custom-empirebr-client" />;
}
