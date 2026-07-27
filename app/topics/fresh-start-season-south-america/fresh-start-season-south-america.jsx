import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-south-america');
}

export default function FreshStartSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-south-america" />;
}
