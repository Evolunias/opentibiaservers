import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-tibia');
}

export default function OfficialArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-tibia" />;
}
