import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-ots');
}

export default function LowrateArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-ots" />;
}
