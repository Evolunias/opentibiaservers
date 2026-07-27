import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-uk');
}

export default function OlderaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-uk" />;
}
