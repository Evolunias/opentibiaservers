import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-tibia');
}

export default function ActiveArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-tibia" />;
}
