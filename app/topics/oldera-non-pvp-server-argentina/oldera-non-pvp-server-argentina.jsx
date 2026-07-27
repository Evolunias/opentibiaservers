import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-non-pvp-server-argentina');
}

export default function OlderaNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-non-pvp-server-argentina" />;
}
