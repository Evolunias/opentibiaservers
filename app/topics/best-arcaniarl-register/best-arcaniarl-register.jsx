import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl-register');
}

export default function BestArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl-register" />;
}
