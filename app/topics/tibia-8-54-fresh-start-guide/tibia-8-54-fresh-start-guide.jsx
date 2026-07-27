import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-fresh-start-guide');
}

export default function Tibia854FreshStartGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-fresh-start-guide" />;
}
