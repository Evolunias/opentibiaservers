import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-official');
}

export default function NewSeasonTibiaretroOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-official" />;
}
