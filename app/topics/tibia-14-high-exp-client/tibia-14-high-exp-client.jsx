import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-client');
}

export default function Tibia14HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-client" />;
}
