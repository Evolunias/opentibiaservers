import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-brazil');
}

export default function ElderaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-brazil" />;
}
