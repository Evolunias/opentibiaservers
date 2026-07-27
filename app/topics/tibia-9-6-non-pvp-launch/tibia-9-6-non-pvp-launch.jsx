import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-non-pvp-launch');
}

export default function Tibia96NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-non-pvp-launch" />;
}
