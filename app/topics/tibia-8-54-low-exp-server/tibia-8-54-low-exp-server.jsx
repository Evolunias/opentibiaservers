import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-low-exp-server');
}

export default function Tibia854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-low-exp-server" />;
}
