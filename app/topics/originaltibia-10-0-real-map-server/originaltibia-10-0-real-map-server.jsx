import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-real-map-server');
}

export default function Originaltibia100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-real-map-server" />;
}
