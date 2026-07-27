import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-fresh-start-server');
}

export default function Tibijka74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-fresh-start-server" />;
}
