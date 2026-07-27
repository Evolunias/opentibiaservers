import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-poland');
}

export default function NostaltherCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-poland" />;
}
