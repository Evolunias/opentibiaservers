import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-login');
}

export default function NewSeasonCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-login" />;
}
