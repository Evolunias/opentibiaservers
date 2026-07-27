import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-canada');
}

export default function NoResetRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-canada" />;
}
