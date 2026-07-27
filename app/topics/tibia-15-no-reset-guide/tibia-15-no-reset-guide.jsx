import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-no-reset-guide');
}

export default function Tibia15NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-no-reset-guide" />;
}
