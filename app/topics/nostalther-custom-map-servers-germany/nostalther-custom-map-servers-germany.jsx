import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-germany');
}

export default function NostaltherCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-germany" />;
}
