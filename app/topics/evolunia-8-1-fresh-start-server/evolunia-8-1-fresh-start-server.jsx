import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-8-1-fresh-start-server');
}

export default function Evolunia81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-8-1-fresh-start-server" />;
}
