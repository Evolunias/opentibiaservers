import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-4-fresh-start-server');
}

export default function Midhem84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-4-fresh-start-server" />;
}
