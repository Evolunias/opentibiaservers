import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-login');
}

export default function NoResetNtoStarLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-login" />;
}
