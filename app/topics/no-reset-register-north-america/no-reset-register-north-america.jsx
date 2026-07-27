import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-north-america');
}

export default function NoResetRegisterNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-north-america" />;
}
