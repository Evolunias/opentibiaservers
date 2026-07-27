import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-france');
}

export default function FreshStartSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-france" />;
}
