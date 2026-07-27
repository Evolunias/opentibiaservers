import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-mist-of-death-tibia');
}

export default function HighrateMistOfDeathTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-mist-of-death-tibia" />;
}
