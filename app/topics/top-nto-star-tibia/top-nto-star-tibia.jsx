import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-tibia');
}

export default function TopNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-tibia" />;
}
