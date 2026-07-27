import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-server');
}

export default function NewSeasonCarlinotServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-server" />;
}
