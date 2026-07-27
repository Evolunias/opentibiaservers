import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-custom-map-servers-brazil');
}

export default function ElderaCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-custom-map-servers-brazil" />;
}
