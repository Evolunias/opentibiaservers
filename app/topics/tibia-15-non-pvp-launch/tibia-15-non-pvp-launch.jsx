import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-launch');
}

export default function Tibia15NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-launch" />;
}
