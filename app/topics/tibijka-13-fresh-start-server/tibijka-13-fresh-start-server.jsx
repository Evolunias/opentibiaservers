import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-fresh-start-server');
}

export default function Tibijka13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-fresh-start-server" />;
}
