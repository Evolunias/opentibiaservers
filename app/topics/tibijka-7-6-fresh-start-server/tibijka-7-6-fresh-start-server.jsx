import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-fresh-start-server');
}

export default function Tibijka76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-fresh-start-server" />;
}
