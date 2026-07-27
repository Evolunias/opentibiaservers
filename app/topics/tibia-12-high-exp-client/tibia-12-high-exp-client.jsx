import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-client');
}

export default function Tibia12HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-client" />;
}
