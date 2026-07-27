import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-carlinot-login');
}

export default function BestCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-carlinot-login" />;
}
