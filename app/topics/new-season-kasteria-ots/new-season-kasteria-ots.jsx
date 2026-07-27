import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-ots');
}

export default function NewSeasonKasteriaOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-ots" />;
}
