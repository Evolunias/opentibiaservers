import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-fresh-start-server');
}

export default function Evolera15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-fresh-start-server" />;
}
