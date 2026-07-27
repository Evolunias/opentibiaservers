import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-fresh-start-server');
}

export default function Evolera12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-fresh-start-server" />;
}
