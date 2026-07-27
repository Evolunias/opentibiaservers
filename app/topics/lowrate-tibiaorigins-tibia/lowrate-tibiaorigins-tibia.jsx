import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaorigins-tibia');
}

export default function LowrateTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaorigins-tibia" />;
}
