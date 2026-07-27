import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-low-exp-client');
}

export default function Tibia14LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-low-exp-client" />;
}
