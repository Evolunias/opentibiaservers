import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-carlinot-register');
}

export default function NoResetCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-carlinot-register" />;
}
