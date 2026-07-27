import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-brazil');
}

export default function OlderaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-brazil" />;
}
