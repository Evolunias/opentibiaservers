import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-fresh-start-server');
}

export default function Midhem11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-fresh-start-server" />;
}
