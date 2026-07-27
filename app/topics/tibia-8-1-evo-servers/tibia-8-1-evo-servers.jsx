import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-evo-servers');
}

export default function Tibia81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-evo-servers" />;
}
