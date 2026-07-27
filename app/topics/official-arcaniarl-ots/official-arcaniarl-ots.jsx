import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-ots');
}

export default function OfficialArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-ots" />;
}
