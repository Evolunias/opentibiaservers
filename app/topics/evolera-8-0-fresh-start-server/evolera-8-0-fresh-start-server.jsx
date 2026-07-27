import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-fresh-start-server');
}

export default function Evolera80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-fresh-start-server" />;
}
