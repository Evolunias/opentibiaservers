import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-ot');
}

export default function NewSeasonClassickDrakoriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-ot" />;
}
