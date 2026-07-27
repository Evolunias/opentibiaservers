import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-france');
}

export default function ArcaniarlPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-france" />;
}
