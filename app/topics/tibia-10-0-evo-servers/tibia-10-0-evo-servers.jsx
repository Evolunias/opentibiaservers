import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-evo-servers');
}

export default function Tibia100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-evo-servers" />;
}
