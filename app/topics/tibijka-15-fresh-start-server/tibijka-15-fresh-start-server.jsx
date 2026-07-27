import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-fresh-start-server');
}

export default function Tibijka15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-fresh-start-server" />;
}
