import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-north-america');
}

export default function OlderaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-north-america" />;
}
