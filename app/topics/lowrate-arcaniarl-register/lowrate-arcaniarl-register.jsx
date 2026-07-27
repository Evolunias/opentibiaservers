import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-arcaniarl-register');
}

export default function LowrateArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-arcaniarl-register" />;
}
