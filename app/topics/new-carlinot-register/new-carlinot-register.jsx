import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-register');
}

export default function NewCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-register" />;
}
