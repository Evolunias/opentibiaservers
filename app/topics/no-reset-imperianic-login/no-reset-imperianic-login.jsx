import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-login');
}

export default function NoResetImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-login" />;
}
