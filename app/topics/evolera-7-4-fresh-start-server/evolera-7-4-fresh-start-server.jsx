import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-fresh-start-server');
}

export default function Evolera74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-fresh-start-server" />;
}
