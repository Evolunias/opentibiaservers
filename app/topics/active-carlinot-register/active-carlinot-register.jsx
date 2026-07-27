import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-register');
}

export default function ActiveCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-register" />;
}
