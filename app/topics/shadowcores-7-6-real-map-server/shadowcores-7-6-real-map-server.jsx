import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-real-map-server');
}

export default function Shadowcores76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-real-map-server" />;
}
