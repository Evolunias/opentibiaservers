import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-germany');
}

export default function NoResetRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-germany" />;
}
