import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-server');
}

export default function NewSeasonClassickDrakoriaServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-server" />;
}
