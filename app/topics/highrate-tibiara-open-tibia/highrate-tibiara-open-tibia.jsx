import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiara-open-tibia');
}

export default function HighrateTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiara-open-tibia" />;
}
