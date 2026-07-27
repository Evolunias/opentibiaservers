import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-europe');
}

export default function OlderaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-europe" />;
}
