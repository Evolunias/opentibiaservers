import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-open-tibia');
}

export default function NoResetTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-open-tibia" />;
}
