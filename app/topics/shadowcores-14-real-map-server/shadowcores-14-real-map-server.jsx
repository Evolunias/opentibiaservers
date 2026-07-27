import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-14-real-map-server');
}

export default function Shadowcores14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-14-real-map-server" />;
}
