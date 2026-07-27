import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-7-6-evo-servers');
}

export default function Tibiara76EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-7-6-evo-servers" />;
}
