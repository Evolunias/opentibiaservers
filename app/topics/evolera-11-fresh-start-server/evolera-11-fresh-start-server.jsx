import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-fresh-start-server');
}

export default function Evolera11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-fresh-start-server" />;
}
