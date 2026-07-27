import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-fresh-start-server');
}

export default function Midhem15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-fresh-start-server" />;
}
