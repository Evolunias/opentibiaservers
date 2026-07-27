import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-argentina');
}

export default function ElderaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-argentina" />;
}
