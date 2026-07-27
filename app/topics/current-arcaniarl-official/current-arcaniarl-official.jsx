import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-official');
}

export default function CurrentArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-official" />;
}
