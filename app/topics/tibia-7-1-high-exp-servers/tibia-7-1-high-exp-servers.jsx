import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-servers');
}

export default function Tibia71HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-servers" />;
}
