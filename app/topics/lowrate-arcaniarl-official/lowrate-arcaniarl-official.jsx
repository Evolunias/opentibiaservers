import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-official');
}

export default function LowrateArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-official" />;
}
