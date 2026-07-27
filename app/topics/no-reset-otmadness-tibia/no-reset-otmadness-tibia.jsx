import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-otmadness-tibia');
}

export default function NoResetOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-otmadness-tibia" />;
}
