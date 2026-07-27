import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-1-evo-servers');
}

export default function Tibiara71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-1-evo-servers" />;
}
