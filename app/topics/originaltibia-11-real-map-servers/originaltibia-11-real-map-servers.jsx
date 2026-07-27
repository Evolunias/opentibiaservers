import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-real-map-servers');
}

export default function Originaltibia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-real-map-servers" />;
}
