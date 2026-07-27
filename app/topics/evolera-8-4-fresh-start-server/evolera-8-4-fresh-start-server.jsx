import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-fresh-start-server');
}

export default function Evolera84FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-fresh-start-server" />;
}
