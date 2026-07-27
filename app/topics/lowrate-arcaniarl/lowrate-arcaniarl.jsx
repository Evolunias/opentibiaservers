import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl');
}

export default function LowrateArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl" />;
}
