import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-non-pvp-server-france');
}

export default function TibiascapeNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-non-pvp-server-france" />;
}
