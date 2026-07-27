import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia');
}

export default function NewSeasonEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia" />;
}
