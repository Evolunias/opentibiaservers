import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaorigins-tibia');
}

export default function FreshStartTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaorigins-tibia" />;
}
