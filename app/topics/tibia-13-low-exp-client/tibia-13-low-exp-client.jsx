import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-client');
}

export default function Tibia13LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-client" />;
}
