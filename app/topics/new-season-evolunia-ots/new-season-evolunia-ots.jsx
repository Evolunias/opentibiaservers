import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-ots');
}

export default function NewSeasonEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-ots" />;
}
