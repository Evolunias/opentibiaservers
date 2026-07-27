import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-server-poland');
}

export default function NostaltherCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-server-poland" />;
}
