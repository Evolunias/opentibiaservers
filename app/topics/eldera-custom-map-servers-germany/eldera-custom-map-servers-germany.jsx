import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-germany');
}

export default function ElderaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-germany" />;
}
