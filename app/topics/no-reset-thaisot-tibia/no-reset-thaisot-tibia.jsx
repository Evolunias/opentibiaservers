import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot-tibia');
}

export default function NoResetThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot-tibia" />;
}
