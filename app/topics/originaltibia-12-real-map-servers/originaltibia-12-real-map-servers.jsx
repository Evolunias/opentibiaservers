import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-real-map-servers');
}

export default function Originaltibia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-real-map-servers" />;
}
