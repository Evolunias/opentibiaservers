import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-custom-map-servers-south-america');
}

export default function NostaltherCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-custom-map-servers-south-america" />;
}
