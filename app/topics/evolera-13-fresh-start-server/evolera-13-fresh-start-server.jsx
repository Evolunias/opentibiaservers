import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-fresh-start-server');
}

export default function Evolera13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-fresh-start-server" />;
}
