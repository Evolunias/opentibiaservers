import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-mexico');
}

export default function TibijkaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-mexico" />;
}
