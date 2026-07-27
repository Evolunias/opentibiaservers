import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaorigins-tibia');
}

export default function BestTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaorigins-tibia" />;
}
