import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-map');
}

export default function ArcaniarlMapKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-map" />;
}
