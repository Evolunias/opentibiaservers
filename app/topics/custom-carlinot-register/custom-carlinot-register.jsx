import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-register');
}

export default function CustomCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-register" />;
}
