import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-retro-server-sweden');
}

export default function TibijkaRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-retro-server-sweden" />;
}
