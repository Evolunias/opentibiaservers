import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-fresh-start-server');
}

export default function Tibijka12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-fresh-start-server" />;
}
