import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-ot');
}

export default function NewSeasonTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-ot" />;
}
