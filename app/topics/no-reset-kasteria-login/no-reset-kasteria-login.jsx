import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-login');
}

export default function NoResetKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-login" />;
}
