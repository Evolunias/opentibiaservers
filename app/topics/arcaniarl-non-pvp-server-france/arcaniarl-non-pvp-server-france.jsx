import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-non-pvp-server-france');
}

export default function ArcaniarlNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-non-pvp-server-france" />;
}
