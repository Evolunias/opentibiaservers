import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-canada');
}

export default function FreshStartSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-canada" />;
}
