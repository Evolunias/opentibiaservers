import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-usa');
}

export default function EvoTibiaPrivateServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-usa" />;
}
