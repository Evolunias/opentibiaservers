import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-servers');
}

export default function Tibia14HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-servers" />;
}
