import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-launch');
}

export default function Tibia76PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-launch" />;
}
