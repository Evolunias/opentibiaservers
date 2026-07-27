import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-germany');
}

export default function TibijkaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-germany" />;
}
