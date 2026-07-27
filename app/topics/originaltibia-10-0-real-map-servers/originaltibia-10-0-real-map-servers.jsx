import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-real-map-servers');
}

export default function Originaltibia100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-real-map-servers" />;
}
