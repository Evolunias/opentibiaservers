import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-login');
}

export default function NoResetRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-login" />;
}
