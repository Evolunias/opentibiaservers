import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-register');
}

export default function FreshStartArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-register" />;
}
