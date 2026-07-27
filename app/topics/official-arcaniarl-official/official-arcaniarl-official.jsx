import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-official');
}

export default function OfficialArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-official" />;
}
