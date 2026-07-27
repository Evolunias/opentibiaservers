import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-evo-servers');
}

export default function Tibia772EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-evo-servers" />;
}
