import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-poland');
}

export default function ElderaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-poland" />;
}
