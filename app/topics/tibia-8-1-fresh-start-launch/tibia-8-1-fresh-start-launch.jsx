import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-launch');
}

export default function Tibia81FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-launch" />;
}
