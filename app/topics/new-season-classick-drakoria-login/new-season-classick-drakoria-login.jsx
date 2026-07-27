import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-login');
}

export default function NewSeasonClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-login" />;
}
