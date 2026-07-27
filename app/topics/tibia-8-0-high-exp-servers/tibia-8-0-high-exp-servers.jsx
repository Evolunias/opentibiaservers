import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-servers');
}

export default function Tibia80HighExpServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-servers" />;
}
