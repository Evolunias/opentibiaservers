import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-no-reset-guide');
}

export default function Tibia80NoResetGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-no-reset-guide" />;
}
