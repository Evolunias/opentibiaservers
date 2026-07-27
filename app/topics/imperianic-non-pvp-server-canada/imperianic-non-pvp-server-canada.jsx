import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-non-pvp-server-canada');
}

export default function ImperianicNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-non-pvp-server-canada" />;
}
