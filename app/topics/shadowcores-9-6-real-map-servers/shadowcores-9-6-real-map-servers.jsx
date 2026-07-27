import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-real-map-servers');
}

export default function Shadowcores96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-real-map-servers" />;
}
