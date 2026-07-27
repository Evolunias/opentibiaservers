import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-login');
}

export default function NoResetEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-login" />;
}
