import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-france');
}

export default function OlderaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-france" />;
}
