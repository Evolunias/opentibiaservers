import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-ot-server');
}

export default function NewSeasonCarlinotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-ot-server" />;
}
