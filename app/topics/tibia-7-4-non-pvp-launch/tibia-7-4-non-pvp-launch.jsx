import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-launch');
}

export default function Tibia74NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-launch" />;
}
