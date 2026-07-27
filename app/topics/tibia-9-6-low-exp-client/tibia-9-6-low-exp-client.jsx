import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-low-exp-client');
}

export default function Tibia96LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-low-exp-client" />;
}
