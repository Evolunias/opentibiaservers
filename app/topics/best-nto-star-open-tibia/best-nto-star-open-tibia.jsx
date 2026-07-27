import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nto-star-open-tibia');
}

export default function BestNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-nto-star-open-tibia" />;
}
