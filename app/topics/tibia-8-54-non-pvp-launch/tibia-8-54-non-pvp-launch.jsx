import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-non-pvp-launch');
}

export default function Tibia854NonPvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-non-pvp-launch" />;
}
