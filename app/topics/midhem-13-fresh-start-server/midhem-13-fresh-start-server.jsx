import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-fresh-start-server');
}

export default function Midhem13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-fresh-start-server" />;
}
