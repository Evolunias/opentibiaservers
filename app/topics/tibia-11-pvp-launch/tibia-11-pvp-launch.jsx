import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-launch');
}

export default function Tibia11PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-launch" />;
}
