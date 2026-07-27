import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-fresh-start-launch');
}

export default function Tibia80FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-fresh-start-launch" />;
}
