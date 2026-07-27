import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-0-evo-servers');
}

export default function Tibiara100EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-0-evo-servers" />;
}
