import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nto-star-open-tibia');
}

export default function LowrateNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nto-star-open-tibia" />;
}
