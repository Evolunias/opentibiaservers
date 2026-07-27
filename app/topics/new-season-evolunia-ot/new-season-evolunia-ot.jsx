import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-evolunia-ot');
}

export default function NewSeasonEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-evolunia-ot" />;
}
