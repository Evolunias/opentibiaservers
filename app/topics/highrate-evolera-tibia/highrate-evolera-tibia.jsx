import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-tibia');
}

export default function HighrateEvoleraTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-tibia" />;
}
