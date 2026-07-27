import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-usa');
}

export default function TibijkaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-usa" />;
}
