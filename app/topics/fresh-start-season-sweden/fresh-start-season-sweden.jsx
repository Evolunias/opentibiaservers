import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-season-sweden');
}

export default function FreshStartSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-season-sweden" />;
}
