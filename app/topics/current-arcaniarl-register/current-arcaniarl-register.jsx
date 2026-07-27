import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-register');
}

export default function CurrentArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-register" />;
}
