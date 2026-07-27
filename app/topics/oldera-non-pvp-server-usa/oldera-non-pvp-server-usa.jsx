import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-usa');
}

export default function OlderaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-usa" />;
}
