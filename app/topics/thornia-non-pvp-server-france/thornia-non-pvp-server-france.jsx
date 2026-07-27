import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-france');
}

export default function ThorniaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-france" />;
}
