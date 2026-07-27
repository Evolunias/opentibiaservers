import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-argentina');
}

export default function NoResetRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-argentina" />;
}
