import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-tibia');
}

export default function RealMapSerenityTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-tibia" />;
}
