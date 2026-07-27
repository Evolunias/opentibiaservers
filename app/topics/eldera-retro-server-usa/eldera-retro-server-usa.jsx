import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-usa');
}

export default function ElderaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-usa" />;
}
