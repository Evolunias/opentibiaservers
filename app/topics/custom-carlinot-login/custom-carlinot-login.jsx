import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-carlinot-login');
}

export default function CustomCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-carlinot-login" />;
}
