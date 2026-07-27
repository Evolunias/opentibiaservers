import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-real-map-servers-uk');
}

export default function OriginaltibiaRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-real-map-servers-uk" />;
}
