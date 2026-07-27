import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-launch');
}

export default function Tibia772FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-launch" />;
}
