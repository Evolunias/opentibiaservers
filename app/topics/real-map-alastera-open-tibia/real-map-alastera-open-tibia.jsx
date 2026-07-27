import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-open-tibia');
}

export default function RealMapAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-open-tibia" />;
}
