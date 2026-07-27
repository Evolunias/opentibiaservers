import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-carlinot-login');
}

export default function CurrentCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="current-carlinot-login" />;
}
