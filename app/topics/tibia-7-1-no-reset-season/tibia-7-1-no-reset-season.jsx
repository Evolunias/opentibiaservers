import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-no-reset-season');
}

export default function Tibia71NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-no-reset-season" />;
}
