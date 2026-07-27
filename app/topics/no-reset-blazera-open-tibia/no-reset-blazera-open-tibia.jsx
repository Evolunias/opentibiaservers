import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-open-tibia');
}

export default function NoResetBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-open-tibia" />;
}
