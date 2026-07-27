import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-real-map-server');
}

export default function Originaltibia76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-real-map-server" />;
}
