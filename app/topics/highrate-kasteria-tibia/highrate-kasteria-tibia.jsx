import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-kasteria-tibia');
}

export default function HighrateKasteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-kasteria-tibia" />;
}
