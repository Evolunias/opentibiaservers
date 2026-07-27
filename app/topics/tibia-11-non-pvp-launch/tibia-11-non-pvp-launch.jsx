import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-launch');
}

export default function Tibia11NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-launch" />;
}
