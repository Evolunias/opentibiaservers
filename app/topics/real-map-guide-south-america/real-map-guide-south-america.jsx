import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-guide-south-america');
}

export default function RealMapGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-guide-south-america" />;
}
