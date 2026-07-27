import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-launch');
}

export default function Tibia100FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-launch" />;
}
