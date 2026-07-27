import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-launch');
}

export default function Tibia14FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-launch" />;
}
