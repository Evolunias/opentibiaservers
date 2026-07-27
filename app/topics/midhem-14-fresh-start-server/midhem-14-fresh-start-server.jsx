import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-14-fresh-start-server');
}

export default function Midhem14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-14-fresh-start-server" />;
}
