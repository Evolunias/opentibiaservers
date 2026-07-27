import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-evo-servers');
}

export default function Tibiara96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-evo-servers" />;
}
