import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-canada');
}

export default function EvoTibiaPrivateServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-canada" />;
}
