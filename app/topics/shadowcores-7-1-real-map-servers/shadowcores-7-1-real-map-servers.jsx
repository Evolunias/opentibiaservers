import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-real-map-servers');
}

export default function Shadowcores71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-real-map-servers" />;
}
