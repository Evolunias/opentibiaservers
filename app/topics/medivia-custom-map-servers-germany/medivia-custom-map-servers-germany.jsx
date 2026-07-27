import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-custom-map-servers-germany');
}

export default function MediviaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-custom-map-servers-germany" />;
}
