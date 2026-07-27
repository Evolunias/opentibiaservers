import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-real-map-server');
}

export default function Sabrehaven14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-real-map-server" />;
}
