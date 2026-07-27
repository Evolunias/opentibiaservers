import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl-register');
}

export default function PopularArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl-register" />;
}
