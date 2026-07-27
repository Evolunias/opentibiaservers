import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-carlinot-login');
}

export default function FreshStartCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-carlinot-login" />;
}
