import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-high-exp-servers');
}

export default function Tibia772HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-high-exp-servers" />;
}
