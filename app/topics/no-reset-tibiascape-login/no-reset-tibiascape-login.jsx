import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-login');
}

export default function NoResetTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-login" />;
}
