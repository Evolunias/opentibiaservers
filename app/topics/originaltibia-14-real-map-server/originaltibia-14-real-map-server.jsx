import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-real-map-server');
}

export default function Originaltibia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-real-map-server" />;
}
