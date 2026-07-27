import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-guide');
}

export default function Tibia14FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-guide" />;
}
