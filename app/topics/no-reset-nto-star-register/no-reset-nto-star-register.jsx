import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-register');
}

export default function NoResetNtoStarRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-register" />;
}
