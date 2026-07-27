import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-client');
}

export default function Tibia15HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-client" />;
}
