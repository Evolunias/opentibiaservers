import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-4-real-map-server');
}

export default function Originaltibia74RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-4-real-map-server" />;
}
