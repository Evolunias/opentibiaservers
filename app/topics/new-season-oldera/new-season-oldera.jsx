import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera');
}

export default function NewSeasonOlderaKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera" />;
}
