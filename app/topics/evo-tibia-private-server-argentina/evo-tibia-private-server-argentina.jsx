import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-argentina');
}

export default function EvoTibiaPrivateServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-argentina" />;
}
