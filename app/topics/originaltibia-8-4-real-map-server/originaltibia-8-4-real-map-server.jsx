import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-4-real-map-server');
}

export default function Originaltibia84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-4-real-map-server" />;
}
