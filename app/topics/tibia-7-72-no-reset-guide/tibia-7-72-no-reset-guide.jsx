import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-no-reset-guide');
}

export default function Tibia772NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-no-reset-guide" />;
}
