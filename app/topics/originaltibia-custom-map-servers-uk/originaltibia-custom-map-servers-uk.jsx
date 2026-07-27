import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-uk');
}

export default function OriginaltibiaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-uk" />;
}
