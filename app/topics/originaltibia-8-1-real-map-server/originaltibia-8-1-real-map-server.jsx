import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-real-map-server');
}

export default function Originaltibia81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-real-map-server" />;
}
