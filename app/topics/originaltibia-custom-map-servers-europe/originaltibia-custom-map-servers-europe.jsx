import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-custom-map-servers-europe');
}

export default function OriginaltibiaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-custom-map-servers-europe" />;
}
