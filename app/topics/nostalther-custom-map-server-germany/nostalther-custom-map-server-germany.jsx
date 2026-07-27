import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-germany');
}

export default function NostaltherCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-germany" />;
}
