import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-argentina');
}

export default function TibijkaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-argentina" />;
}
