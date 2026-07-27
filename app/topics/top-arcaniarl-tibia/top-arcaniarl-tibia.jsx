import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-tibia');
}

export default function TopArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-tibia" />;
}
