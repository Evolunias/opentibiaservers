import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-guide');
}

export default function Tibia71NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-guide" />;
}
