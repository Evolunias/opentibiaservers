import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-client');
}

export default function Tibia81LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-client" />;
}
