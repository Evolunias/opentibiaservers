import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-open-tibia');
}

export default function NoResetArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-open-tibia" />;
}
