import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-low-exp-server');
}

export default function Tibia81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-low-exp-server" />;
}
