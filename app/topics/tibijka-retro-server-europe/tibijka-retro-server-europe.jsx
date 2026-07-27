import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-europe');
}

export default function TibijkaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-europe" />;
}
