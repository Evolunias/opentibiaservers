import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-tibia-private-server-france');
}

export default function EvoTibiaPrivateServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evo-tibia-private-server-france" />;
}
