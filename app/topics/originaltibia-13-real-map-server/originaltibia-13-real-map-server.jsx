import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-real-map-server');
}

export default function Originaltibia13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-real-map-server" />;
}
