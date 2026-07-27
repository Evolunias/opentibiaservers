import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-high-exp-servers');
}

export default function Tibia86HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-high-exp-servers" />;
}
