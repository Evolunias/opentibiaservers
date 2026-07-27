import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-login');
}

export default function NoResetTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-login" />;
}
