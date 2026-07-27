import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-mexico');
}

export default function NoResetRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-mexico" />;
}
