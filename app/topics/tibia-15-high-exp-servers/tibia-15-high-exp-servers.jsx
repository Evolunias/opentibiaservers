import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-servers');
}

export default function Tibia15HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-servers" />;
}
