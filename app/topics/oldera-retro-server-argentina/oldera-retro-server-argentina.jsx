import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-argentina');
}

export default function OlderaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-argentina" />;
}
