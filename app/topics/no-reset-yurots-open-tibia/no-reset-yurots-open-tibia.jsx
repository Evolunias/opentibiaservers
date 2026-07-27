import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-open-tibia');
}

export default function NoResetYurotsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-open-tibia" />;
}
