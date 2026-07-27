import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-ot');
}

export default function NewSeasonKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-ot" />;
}
