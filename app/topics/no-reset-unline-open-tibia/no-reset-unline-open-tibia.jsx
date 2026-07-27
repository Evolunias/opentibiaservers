import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-unline-open-tibia');
}

export default function NoResetUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-unline-open-tibia" />;
}
