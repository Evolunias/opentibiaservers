import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-poland');
}

export default function TibijkaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-poland" />;
}
