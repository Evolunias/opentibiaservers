import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-register');
}

export default function NoResetRealestaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-register" />;
}
