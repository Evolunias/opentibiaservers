import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-guide');
}

export default function Tibia14NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-guide" />;
}
