import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-client');
}

export default function Tibia12LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-client" />;
}
