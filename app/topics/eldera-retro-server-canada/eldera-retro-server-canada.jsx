import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-canada');
}

export default function ElderaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-canada" />;
}
