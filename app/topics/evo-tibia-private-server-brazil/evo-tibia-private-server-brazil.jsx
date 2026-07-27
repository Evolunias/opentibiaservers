import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-brazil');
}

export default function EvoTibiaPrivateServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-brazil" />;
}
