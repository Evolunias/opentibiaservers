import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-open-tibia');
}

export default function CurrentNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-open-tibia" />;
}
