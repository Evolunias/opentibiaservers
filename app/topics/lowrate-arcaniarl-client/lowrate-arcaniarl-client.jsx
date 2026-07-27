import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-client');
}

export default function LowrateArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-client" />;
}
