import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-servers');
}

export default function Tibia81HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-servers" />;
}
