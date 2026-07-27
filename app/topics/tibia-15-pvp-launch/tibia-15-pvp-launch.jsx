import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-launch');
}

export default function Tibia15PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-launch" />;
}
