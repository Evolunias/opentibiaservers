import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-open-tibia');
}

export default function CustomArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-open-tibia" />;
}
