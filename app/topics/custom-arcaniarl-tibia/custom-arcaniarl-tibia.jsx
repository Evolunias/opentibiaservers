import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-arcaniarl-tibia');
}

export default function CustomArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-arcaniarl-tibia" />;
}
