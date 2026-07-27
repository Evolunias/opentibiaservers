import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-register');
}

export default function HighrateArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-register" />;
}
