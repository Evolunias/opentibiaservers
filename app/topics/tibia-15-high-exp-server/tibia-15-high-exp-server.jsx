import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-server');
}

export default function Tibia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-server" />;
}
