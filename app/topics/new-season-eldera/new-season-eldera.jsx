import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera');
}

export default function NewSeasonElderaKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera" />;
}
