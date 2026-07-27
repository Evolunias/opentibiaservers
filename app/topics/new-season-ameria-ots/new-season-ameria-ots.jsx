import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ameria-ots');
}

export default function NewSeasonAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-ameria-ots" />;
}
