import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-open-tibia');
}

export default function NoResetCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-open-tibia" />;
}
