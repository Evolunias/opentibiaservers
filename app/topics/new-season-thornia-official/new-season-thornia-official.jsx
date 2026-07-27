import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thornia-official');
}

export default function NewSeasonThorniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-thornia-official" />;
}
