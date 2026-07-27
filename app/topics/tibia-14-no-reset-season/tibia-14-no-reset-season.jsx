import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-no-reset-season');
}

export default function Tibia14NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-no-reset-season" />;
}
