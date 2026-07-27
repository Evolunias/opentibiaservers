import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-launch');
}

export default function Tibia76FreshStartLaunchKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-launch" />;
}
