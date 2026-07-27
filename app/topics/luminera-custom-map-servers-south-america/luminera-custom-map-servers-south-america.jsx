import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-south-america');
}

export default function LumineraCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-south-america" />;
}
