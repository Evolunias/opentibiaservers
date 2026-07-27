import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-uk');
}

export default function ElderaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-uk" />;
}
