import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-register');
}

export default function TopCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-register" />;
}
