import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-open-tibia');
}

export default function OfficialArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-open-tibia" />;
}
