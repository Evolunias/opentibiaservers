import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-no-reset-season');
}

export default function Tibia854NoResetSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-no-reset-season" />;
}
