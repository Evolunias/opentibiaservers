import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-no-reset-season');
}

export default function Tibia12NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-no-reset-season" />;
}
