import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map-servers-uk');
}

export default function TibianusRealMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map-servers-uk" />;
}
