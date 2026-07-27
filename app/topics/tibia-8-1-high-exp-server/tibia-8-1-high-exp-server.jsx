import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-server');
}

export default function Tibia81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-server" />;
}
