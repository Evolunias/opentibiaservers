import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-fresh-start-server');
}

export default function Midhem81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-fresh-start-server" />;
}
