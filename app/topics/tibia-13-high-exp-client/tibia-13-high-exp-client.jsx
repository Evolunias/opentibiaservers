import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-client');
}

export default function Tibia13HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-client" />;
}
