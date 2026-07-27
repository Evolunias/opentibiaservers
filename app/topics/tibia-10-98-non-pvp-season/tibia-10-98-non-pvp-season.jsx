import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-season');
}

export default function Tibia1098NonPvpSeasonKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-season" />;
}
