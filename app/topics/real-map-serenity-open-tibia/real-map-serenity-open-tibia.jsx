import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-serenity-open-tibia');
}

export default function RealMapSerenityOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-serenity-open-tibia" />;
}
