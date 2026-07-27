import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oxygenot-open-tibia');
}

export default function NoResetOxygenotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oxygenot-open-tibia" />;
}
