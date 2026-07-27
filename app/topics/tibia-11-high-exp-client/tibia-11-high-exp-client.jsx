import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-client');
}

export default function Tibia11HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-client" />;
}
