import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaorigins-tibia');
}

export default function TopTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaorigins-tibia" />;
}
