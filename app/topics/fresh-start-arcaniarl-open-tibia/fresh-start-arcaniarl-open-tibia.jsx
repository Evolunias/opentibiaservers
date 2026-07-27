import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-open-tibia');
}

export default function FreshStartArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-open-tibia" />;
}
