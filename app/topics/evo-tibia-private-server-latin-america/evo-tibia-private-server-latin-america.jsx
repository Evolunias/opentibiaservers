import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-latin-america');
}

export default function EvoTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-latin-america" />;
}
