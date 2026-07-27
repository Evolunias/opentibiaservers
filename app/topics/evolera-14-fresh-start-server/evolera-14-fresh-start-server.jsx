import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-fresh-start-server');
}

export default function Evolera14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-fresh-start-server" />;
}
