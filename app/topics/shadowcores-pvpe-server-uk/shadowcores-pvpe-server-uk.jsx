import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-uk');
}

export default function ShadowcoresPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-uk" />;
}
