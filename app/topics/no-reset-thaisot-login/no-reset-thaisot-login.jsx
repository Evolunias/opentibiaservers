import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-login');
}

export default function NoResetThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-login" />;
}
