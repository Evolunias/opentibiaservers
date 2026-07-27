import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-login');
}

export default function NoResetCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-login" />;
}
