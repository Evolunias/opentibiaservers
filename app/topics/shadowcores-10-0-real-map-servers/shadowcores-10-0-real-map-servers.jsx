import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-real-map-servers');
}

export default function Shadowcores100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-real-map-servers" />;
}
