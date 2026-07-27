import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-register');
}

export default function NewArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-register" />;
}
