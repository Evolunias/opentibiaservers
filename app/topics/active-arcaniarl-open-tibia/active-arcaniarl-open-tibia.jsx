import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-open-tibia');
}

export default function ActiveArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-open-tibia" />;
}
