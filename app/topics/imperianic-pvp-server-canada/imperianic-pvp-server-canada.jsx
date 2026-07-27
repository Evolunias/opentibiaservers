import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-pvp-server-canada');
}

export default function ImperianicPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-pvp-server-canada" />;
}
