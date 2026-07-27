import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-server-germany');
}

export default function ElderaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-server-germany" />;
}
