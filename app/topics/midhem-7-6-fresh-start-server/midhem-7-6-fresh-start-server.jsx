import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-fresh-start-server');
}

export default function Midhem76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-fresh-start-server" />;
}
