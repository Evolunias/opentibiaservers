import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-server-client');
}

export default function EvoServerClientKeywordPage() {
  return <StaticKeywordPage slug="evo-server-client" />;
}
