import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nto-star-open-tibia');
}

export default function PopularNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="popular-nto-star-open-tibia" />;
}
