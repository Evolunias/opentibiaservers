import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-arcaniarl-ot');
}

export default function OfficialArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="official-arcaniarl-ot" />;
}
