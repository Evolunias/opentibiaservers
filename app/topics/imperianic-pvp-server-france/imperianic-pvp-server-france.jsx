import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-france');
}

export default function ImperianicPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-france" />;
}
