import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-guide');
}

export default function Tibia12NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-guide" />;
}
