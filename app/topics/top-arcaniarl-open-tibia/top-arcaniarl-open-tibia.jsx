import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-open-tibia');
}

export default function TopArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-open-tibia" />;
}
