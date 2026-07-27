import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-uk');
}

export default function OlderaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-uk" />;
}
