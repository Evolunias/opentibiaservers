import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-tibia');
}

export default function HighrateEvoluniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-tibia" />;
}
