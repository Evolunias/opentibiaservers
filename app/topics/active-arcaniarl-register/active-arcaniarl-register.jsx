import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-register');
}

export default function ActiveArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-register" />;
}
