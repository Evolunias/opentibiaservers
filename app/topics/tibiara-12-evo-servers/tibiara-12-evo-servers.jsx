import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-12-evo-servers');
}

export default function Tibiara12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiara-12-evo-servers" />;
}
