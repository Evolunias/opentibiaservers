import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-register');
}

export default function NoResetArcaniarlRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-register" />;
}
