import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-client');
}

export default function NewSeasonClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-client" />;
}
