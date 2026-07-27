import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-real-map-servers');
}

export default function Shadowcores12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-real-map-servers" />;
}
