import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-no-reset-guide');
}

export default function Tibia86NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-no-reset-guide" />;
}
