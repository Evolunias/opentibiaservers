import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-real-map-server');
}

export default function Originaltibia11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-real-map-server" />;
}
