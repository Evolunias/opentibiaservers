import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-fresh-start-server');
}

export default function Evolera100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-fresh-start-server" />;
}
