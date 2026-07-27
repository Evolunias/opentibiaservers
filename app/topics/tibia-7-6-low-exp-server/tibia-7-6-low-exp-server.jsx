import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-low-exp-server');
}

export default function Tibia76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-low-exp-server" />;
}
