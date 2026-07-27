import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-no-reset-guide');
}

export default function Tibia100NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-no-reset-guide" />;
}
