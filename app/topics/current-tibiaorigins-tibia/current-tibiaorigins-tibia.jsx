import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaorigins-tibia');
}

export default function CurrentTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaorigins-tibia" />;
}
