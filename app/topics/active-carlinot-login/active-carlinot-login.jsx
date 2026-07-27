import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-carlinot-login');
}

export default function ActiveCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="active-carlinot-login" />;
}
