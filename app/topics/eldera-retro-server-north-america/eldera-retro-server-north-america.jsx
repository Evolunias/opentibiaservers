import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-retro-server-north-america');
}

export default function ElderaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-retro-server-north-america" />;
}
