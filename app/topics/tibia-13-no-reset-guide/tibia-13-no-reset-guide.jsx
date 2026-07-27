import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-guide');
}

export default function Tibia13NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-guide" />;
}
