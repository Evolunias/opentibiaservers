import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-client');
}

export default function NewSeasonTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-client" />;
}
