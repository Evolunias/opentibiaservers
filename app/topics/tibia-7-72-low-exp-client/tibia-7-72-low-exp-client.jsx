import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-client');
}

export default function Tibia772LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-client" />;
}
