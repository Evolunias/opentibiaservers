import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-open-tibia');
}

export default function NoResetHarmoniaOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-open-tibia" />;
}
