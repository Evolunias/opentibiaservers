import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-north-america');
}

export default function OlderaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-north-america" />;
}
