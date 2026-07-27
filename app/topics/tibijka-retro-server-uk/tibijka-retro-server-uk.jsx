import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-uk');
}

export default function TibijkaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-uk" />;
}
