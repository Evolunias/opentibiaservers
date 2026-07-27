import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-launch');
}

export default function Tibia14NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-launch" />;
}
