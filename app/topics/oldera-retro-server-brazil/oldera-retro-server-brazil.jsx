import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-brazil');
}

export default function OlderaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-brazil" />;
}
