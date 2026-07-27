import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-open-tibia');
}

export default function HighrateEvoluniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-open-tibia" />;
}
