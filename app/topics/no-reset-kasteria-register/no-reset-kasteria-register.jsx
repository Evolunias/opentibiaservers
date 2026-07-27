import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria-register');
}

export default function NoResetKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria-register" />;
}
