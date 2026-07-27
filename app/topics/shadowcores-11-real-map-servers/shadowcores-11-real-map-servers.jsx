import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-real-map-servers');
}

export default function Shadowcores11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-real-map-servers" />;
}
