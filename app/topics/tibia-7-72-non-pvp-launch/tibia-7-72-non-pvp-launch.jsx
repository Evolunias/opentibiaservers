import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-launch');
}

export default function Tibia772NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-launch" />;
}
