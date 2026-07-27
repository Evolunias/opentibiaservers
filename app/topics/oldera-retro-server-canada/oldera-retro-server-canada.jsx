import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-canada');
}

export default function OlderaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-canada" />;
}
