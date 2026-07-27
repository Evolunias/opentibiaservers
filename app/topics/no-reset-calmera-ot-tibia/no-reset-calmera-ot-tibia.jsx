import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-tibia');
}

export default function NoResetCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-tibia" />;
}
