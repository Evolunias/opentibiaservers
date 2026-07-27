import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-8-4-evo-servers');
}

export default function Tibiara84EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-8-4-evo-servers" />;
}
