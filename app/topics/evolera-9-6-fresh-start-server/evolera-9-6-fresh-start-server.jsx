import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-fresh-start-server');
}

export default function Evolera96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-fresh-start-server" />;
}
