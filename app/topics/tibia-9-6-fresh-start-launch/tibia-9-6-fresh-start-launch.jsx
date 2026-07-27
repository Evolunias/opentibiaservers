import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-launch');
}

export default function Tibia96FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-launch" />;
}
