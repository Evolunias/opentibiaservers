import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-sabrehaven-open-tibia');
}

export default function RealMapSabrehavenOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-sabrehaven-open-tibia" />;
}
