import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-europe');
}

export default function ElderaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-europe" />;
}
