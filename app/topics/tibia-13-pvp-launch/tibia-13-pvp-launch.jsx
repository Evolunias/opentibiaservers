import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-launch');
}

export default function Tibia13PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-launch" />;
}
