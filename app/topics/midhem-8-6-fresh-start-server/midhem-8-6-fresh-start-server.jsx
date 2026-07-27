import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-fresh-start-server');
}

export default function Midhem86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-fresh-start-server" />;
}
