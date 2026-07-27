import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-europe');
}

export default function OlderaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-europe" />;
}
