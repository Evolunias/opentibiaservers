import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-real-map-servers');
}

export default function Shadowcores86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-real-map-servers" />;
}
