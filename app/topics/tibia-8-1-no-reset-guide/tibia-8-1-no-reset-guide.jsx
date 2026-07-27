import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-no-reset-guide');
}

export default function Tibia81NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-no-reset-guide" />;
}
