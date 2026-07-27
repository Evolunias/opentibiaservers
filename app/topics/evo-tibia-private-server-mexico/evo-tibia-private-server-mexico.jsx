import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-mexico');
}

export default function EvoTibiaPrivateServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-mexico" />;
}
