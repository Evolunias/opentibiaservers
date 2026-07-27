import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-south-america');
}

export default function ThorniaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-south-america" />;
}
