import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-mexico');
}

export default function OlderaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-mexico" />;
}
