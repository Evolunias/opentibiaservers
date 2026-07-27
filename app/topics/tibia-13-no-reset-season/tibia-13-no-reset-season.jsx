import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-no-reset-season');
}

export default function Tibia13NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-no-reset-season" />;
}
