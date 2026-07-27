import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-rubinot-tibia');
}

export default function NoResetRubinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-rubinot-tibia" />;
}
