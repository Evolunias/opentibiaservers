import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-login');
}

export default function NoResetArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-login" />;
}
