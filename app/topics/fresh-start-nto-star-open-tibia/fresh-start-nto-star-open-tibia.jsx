import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-open-tibia');
}

export default function FreshStartNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-open-tibia" />;
}
