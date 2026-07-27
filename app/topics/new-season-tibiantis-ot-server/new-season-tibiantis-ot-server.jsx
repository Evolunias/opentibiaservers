import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-ot-server');
}

export default function NewSeasonTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-ot-server" />;
}
