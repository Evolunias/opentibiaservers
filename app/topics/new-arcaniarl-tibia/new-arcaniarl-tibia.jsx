import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-tibia');
}

export default function NewArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-tibia" />;
}
