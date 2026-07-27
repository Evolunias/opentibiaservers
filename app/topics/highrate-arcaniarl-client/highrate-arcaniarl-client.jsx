import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-arcaniarl-client');
}

export default function HighrateArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-arcaniarl-client" />;
}
