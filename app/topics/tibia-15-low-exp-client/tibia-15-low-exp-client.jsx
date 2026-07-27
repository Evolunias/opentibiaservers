import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-client');
}

export default function Tibia15LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-client" />;
}
