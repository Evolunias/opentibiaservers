import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvpe-server-poland');
}

export default function TibijkaPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvpe-server-poland" />;
}
