import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl');
}

export default function OfficialArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl" />;
}
