import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-server');
}

export default function Tibia14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-server" />;
}
