import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-launch');
}

export default function Tibia13NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-launch" />;
}
