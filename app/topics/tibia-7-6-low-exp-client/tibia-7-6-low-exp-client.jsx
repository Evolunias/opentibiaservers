import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-client');
}

export default function Tibia76LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-client" />;
}
