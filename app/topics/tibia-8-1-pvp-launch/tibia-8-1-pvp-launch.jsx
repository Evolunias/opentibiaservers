import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-launch');
}

export default function Tibia81PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-launch" />;
}
