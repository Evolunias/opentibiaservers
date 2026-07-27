import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl');
}

export default function FreshStartArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl" />;
}
