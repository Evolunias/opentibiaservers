import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-germany');
}

export default function OlderaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-germany" />;
}
