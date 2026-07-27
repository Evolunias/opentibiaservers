import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-fresh-start-server');
}

export default function Tibijka81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-fresh-start-server" />;
}
