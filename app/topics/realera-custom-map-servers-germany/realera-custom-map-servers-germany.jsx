import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-germany');
}

export default function RealeraCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-germany" />;
}
