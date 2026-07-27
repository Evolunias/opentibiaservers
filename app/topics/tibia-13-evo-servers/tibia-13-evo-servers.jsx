import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-evo-servers');
}

export default function Tibia13EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-evo-servers" />;
}
