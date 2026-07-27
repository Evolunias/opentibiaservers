import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nto-star-open-tibia');
}

export default function TopNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nto-star-open-tibia" />;
}
