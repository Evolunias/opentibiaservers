import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-no-reset-guide');
}

export default function Tibia76NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-no-reset-guide" />;
}
