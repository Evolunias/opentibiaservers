import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-europe');
}

export default function ElderaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-europe" />;
}
