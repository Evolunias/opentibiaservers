import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-real-map-server');
}

export default function Originaltibia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-real-map-server" />;
}
