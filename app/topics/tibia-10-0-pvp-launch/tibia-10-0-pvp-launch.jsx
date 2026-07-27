import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-launch');
}

export default function Tibia100PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-launch" />;
}
