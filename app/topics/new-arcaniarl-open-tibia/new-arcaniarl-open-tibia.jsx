import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-arcaniarl-open-tibia');
}

export default function NewArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-arcaniarl-open-tibia" />;
}
