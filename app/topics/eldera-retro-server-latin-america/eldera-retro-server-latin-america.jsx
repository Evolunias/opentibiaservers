import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-latin-america');
}

export default function ElderaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-latin-america" />;
}
