import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-client');
}

export default function Tibia74LowExpClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-client" />;
}
