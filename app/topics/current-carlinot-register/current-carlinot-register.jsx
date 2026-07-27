import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-register');
}

export default function CurrentCarlinotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-register" />;
}
