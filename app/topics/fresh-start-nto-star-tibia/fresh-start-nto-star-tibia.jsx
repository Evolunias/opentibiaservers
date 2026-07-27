import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nto-star-tibia');
}

export default function FreshStartNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nto-star-tibia" />;
}
