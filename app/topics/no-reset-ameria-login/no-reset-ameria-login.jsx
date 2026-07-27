import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-login');
}

export default function NoResetAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-login" />;
}
