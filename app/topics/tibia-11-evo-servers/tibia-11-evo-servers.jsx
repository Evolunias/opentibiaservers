import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-evo-servers');
}

export default function Tibia11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-evo-servers" />;
}
