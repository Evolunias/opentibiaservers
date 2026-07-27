import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-launch');
}

export default function Tibia80PvpLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-launch" />;
}
