import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-north-america');
}

export default function FreshStartSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-north-america" />;
}
