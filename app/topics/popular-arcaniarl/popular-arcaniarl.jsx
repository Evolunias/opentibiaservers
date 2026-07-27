import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-arcaniarl');
}

export default function PopularArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="popular-arcaniarl" />;
}
