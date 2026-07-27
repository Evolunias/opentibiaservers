import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-carlinot-login');
}

export default function TopCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="top-carlinot-login" />;
}
