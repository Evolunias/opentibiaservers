import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-12-evo-servers');
}

export default function Tibiame12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-12-evo-servers" />;
}
