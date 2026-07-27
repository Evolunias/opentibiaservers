import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-france');
}

export default function TibijkaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-france" />;
}
