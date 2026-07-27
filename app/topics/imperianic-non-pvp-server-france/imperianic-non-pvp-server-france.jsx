import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-france');
}

export default function ImperianicNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-france" />;
}
