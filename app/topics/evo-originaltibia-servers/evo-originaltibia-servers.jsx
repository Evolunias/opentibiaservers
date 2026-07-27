import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-originaltibia-servers');
}

export default function EvoOriginaltibiaServersKeywordPage() {
  return <StaticKeywordPage slug="evo-originaltibia-servers" />;
}
