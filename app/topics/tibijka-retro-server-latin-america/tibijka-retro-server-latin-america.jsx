import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-latin-america');
}

export default function TibijkaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-latin-america" />;
}
