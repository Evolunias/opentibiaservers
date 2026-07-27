import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-client');
}

export default function Tibia11LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-client" />;
}
