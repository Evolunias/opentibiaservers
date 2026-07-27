import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nto-star-tibia');
}

export default function CurrentNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-nto-star-tibia" />;
}
