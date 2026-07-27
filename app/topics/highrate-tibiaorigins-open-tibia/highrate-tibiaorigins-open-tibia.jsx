import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaorigins-open-tibia');
}

export default function HighrateTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaorigins-open-tibia" />;
}
