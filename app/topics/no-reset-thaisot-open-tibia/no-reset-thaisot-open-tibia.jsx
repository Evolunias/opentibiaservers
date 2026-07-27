import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-open-tibia');
}

export default function NoResetThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-open-tibia" />;
}
