import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-tibia');
}

export default function NoResetOxygenotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-tibia" />;
}
