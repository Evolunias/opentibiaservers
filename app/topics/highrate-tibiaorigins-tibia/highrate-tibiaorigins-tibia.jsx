import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-tibia');
}

export default function HighrateTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-tibia" />;
}
