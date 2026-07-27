import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-login');
}

export default function LowrateArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-login" />;
}
