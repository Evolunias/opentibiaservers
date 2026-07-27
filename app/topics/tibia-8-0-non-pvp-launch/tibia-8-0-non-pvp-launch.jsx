import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-launch');
}

export default function Tibia80NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-launch" />;
}
