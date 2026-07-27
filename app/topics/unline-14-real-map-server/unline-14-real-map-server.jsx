import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-14-real-map-server');
}

export default function Unline14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="unline-14-real-map-server" />;
}
