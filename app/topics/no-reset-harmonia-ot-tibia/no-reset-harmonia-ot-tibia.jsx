import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-tibia');
}

export default function NoResetHarmoniaOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-tibia" />;
}
