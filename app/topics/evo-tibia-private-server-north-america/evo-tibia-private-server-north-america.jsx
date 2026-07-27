import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-north-america');
}

export default function EvoTibiaPrivateServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-north-america" />;
}
