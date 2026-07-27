import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-no-reset-season');
}

export default function Tibia11NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-no-reset-season" />;
}
