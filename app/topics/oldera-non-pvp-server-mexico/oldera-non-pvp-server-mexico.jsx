import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-mexico');
}

export default function OlderaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-mexico" />;
}
