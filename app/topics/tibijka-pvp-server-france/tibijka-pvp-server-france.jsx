import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-france');
}

export default function TibijkaPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-france" />;
}
