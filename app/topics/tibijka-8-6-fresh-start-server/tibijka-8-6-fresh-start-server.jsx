import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-fresh-start-server');
}

export default function Tibijka86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-fresh-start-server" />;
}
