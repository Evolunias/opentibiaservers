import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-uk');
}

export default function NoResetRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-uk" />;
}
