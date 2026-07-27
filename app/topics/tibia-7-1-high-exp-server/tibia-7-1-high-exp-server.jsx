import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-server');
}

export default function Tibia71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-server" />;
}
