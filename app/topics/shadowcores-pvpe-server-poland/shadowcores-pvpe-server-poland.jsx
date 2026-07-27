import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-poland');
}

export default function ShadowcoresPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-poland" />;
}
