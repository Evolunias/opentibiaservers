import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-canada');
}

export default function TibijkaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-canada" />;
}
