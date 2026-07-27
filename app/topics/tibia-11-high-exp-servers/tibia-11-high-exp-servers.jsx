import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-servers');
}

export default function Tibia11HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-servers" />;
}
