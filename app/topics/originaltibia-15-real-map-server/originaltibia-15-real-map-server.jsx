import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-real-map-server');
}

export default function Originaltibia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-real-map-server" />;
}
