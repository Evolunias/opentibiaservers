import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-sweden');
}

export default function NoResetRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-sweden" />;
}
