import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-register');
}

export default function TopArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-register" />;
}
