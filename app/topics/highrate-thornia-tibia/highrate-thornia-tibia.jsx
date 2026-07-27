import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-tibia');
}

export default function HighrateThorniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-tibia" />;
}
