import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-empirebr-servers');
}

export default function CustomMapEmpirebrServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-empirebr-servers" />;
}
