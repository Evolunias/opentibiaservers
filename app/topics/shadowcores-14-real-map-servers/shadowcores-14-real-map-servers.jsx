import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-real-map-servers');
}

export default function Shadowcores14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-real-map-servers" />;
}
