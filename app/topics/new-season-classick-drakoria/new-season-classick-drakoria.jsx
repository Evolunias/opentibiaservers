import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria');
}

export default function NewSeasonClassickDrakoriaKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria" />;
}
