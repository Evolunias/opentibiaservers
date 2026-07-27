import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-launch');
}

export default function Tibia11FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-launch" />;
}
