import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-real-map-servers');
}

export default function Shadowcores74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-real-map-servers" />;
}
