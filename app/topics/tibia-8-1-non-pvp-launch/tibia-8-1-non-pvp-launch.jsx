import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-launch');
}

export default function Tibia81NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-launch" />;
}
