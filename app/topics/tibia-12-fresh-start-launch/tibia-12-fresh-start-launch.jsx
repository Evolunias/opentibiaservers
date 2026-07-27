import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-launch');
}

export default function Tibia12FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-launch" />;
}
