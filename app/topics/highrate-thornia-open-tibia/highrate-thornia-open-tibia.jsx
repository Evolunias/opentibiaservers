import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-open-tibia');
}

export default function HighrateThorniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-open-tibia" />;
}
