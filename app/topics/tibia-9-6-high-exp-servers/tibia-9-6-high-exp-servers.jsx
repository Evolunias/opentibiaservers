import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-servers');
}

export default function Tibia96HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-servers" />;
}
