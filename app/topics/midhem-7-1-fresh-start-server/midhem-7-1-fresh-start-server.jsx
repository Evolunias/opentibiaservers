import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-fresh-start-server');
}

export default function Midhem71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-fresh-start-server" />;
}
