import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-ot');
}

export default function LowrateArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-ot" />;
}
