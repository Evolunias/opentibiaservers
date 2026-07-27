import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classicus-login');
}

export default function NoResetClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classicus-login" />;
}
