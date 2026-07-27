import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-server');
}

export default function NewSeasonTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-server" />;
}
