import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-tibia');
}

export default function RealMapSabrehavenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-tibia" />;
}
