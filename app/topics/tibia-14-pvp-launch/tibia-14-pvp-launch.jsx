import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-launch');
}

export default function Tibia14PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-launch" />;
}
