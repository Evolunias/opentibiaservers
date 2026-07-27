import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-usa');
}

export default function OlderaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-usa" />;
}
