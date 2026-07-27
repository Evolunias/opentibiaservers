import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-high-exp-client');
}

export default function Tibia74HighExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-high-exp-client" />;
}
