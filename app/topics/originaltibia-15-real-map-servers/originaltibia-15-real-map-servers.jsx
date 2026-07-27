import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-real-map-servers');
}

export default function Originaltibia15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-real-map-servers" />;
}
