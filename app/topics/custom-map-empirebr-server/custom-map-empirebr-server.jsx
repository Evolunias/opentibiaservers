import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-empirebr-server');
}

export default function CustomMapEmpirebrServerKeywordPage() {
  return <StaticKeywordPage slug="custom-map-empirebr-server" />;
}
