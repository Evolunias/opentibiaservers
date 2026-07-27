import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-server');
}

export default function Tibia13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-server" />;
}
