import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-ots');
}

export default function NewSeasonOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-ots" />;
}
