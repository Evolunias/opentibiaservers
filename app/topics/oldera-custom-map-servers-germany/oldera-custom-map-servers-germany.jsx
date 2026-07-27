import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-custom-map-servers-germany');
}

export default function OlderaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-custom-map-servers-germany" />;
}
