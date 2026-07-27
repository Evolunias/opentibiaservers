import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-europe');
}

export default function ShadowcoresPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-europe" />;
}
