import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-carlinot-login');
}

export default function NewCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-carlinot-login" />;
}
