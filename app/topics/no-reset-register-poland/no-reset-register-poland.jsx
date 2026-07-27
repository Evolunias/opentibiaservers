import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-poland');
}

export default function NoResetRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-poland" />;
}
