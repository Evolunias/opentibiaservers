import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibijka-open-tibia');
}

export default function HighrateTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibijka-open-tibia" />;
}
