import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-official');
}

export default function NewSeasonEvoluniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-official" />;
}
