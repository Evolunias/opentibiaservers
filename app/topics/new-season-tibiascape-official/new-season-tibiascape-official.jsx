import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiascape-official');
}

export default function NewSeasonTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiascape-official" />;
}
