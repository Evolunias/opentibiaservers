import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-register');
}

export default function BestCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-register" />;
}
