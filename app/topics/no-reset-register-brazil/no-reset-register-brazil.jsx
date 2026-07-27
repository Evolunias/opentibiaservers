import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-brazil');
}

export default function NoResetRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-brazil" />;
}
