import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-register');
}

export default function CustomArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-register" />;
}
