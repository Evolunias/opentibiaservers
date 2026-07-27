import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-fresh-start-server');
}

export default function Tibijka71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-fresh-start-server" />;
}
