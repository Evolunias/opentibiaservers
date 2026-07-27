import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-12-fresh-start-server');
}

export default function Midhem12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-12-fresh-start-server" />;
}
