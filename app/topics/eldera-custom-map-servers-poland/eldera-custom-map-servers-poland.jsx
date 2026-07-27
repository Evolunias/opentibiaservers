import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-poland');
}

export default function ElderaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-poland" />;
}
