import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-yurots-tibia');
}

export default function NoResetYurotsTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-yurots-tibia" />;
}
