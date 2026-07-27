import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-fresh-start-server-sweden');
}

export default function TibijkaFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-fresh-start-server-sweden" />;
}
