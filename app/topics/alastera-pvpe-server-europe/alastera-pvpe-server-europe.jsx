import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvpe-server-europe');
}

export default function AlasteraPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvpe-server-europe" />;
}
