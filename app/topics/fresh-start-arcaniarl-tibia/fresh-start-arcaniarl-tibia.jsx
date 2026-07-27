import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-arcaniarl-tibia');
}

export default function FreshStartArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-arcaniarl-tibia" />;
}
