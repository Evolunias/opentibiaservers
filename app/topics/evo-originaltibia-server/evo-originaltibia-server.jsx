import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-originaltibia-server');
}

export default function EvoOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="evo-originaltibia-server" />;
}
