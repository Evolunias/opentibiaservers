import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-guide');
}

export default function Tibia11NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-guide" />;
}
