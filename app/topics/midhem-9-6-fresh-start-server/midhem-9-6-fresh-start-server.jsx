import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-fresh-start-server');
}

export default function Midhem96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-fresh-start-server" />;
}
