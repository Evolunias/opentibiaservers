import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-servers');
}

export default function Tibia13HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-servers" />;
}
