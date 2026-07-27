import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-0-real-map-server');
}

export default function Shadowcores100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-0-real-map-server" />;
}
