import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-4-fresh-start-server');
}

export default function Midhem74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-4-fresh-start-server" />;
}
