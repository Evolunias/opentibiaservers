import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-servers');
}

export default function Tibia12HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-servers" />;
}
