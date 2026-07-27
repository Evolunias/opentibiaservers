import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-13-real-map-servers');
}

export default function Shadowcores13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-13-real-map-servers" />;
}
