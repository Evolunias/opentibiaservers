import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-usa');
}

export default function FreshStartSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-usa" />;
}
