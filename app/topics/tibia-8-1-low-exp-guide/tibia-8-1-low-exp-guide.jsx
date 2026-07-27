import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-guide');
}

export default function Tibia81LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-guide" />;
}
