import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-guide-south-america');
}

export default function CustomMapGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-guide-south-america" />;
}
