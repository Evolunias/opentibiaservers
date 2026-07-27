import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-open-tibia');
}

export default function NoResetRubinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-open-tibia" />;
}
