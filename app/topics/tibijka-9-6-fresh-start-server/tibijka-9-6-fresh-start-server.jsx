import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-fresh-start-server');
}

export default function Tibijka96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-fresh-start-server" />;
}
