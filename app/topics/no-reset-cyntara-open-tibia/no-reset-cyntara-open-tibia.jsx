import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-open-tibia');
}

export default function NoResetCyntaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-open-tibia" />;
}
