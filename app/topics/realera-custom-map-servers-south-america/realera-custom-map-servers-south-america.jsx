import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-custom-map-servers-south-america');
}

export default function RealeraCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-custom-map-servers-south-america" />;
}
