import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-arcaniarl');
}

export default function BestArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="best-arcaniarl" />;
}
