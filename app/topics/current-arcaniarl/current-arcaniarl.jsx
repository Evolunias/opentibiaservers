import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl');
}

export default function CurrentArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl" />;
}
