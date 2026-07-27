import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-tibia');
}

export default function NoResetArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-tibia" />;
}
