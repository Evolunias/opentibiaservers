import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-retro-server-poland');
}

export default function OlderaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-retro-server-poland" />;
}
