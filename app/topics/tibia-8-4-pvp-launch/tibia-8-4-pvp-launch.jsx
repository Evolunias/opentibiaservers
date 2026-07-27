import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-launch');
}

export default function Tibia84PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-launch" />;
}
