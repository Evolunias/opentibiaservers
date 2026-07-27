import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-servers');
}

export default function Tibia76HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-servers" />;
}
