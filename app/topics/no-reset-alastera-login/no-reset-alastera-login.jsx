import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-alastera-login');
}

export default function NoResetAlasteraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-alastera-login" />;
}
