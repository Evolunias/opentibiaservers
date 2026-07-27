import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-real-map-servers');
}

export default function Originaltibia13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-real-map-servers" />;
}
