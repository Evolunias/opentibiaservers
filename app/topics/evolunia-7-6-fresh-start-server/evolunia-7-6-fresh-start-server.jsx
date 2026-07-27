import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-6-fresh-start-server');
}

export default function Evolunia76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-6-fresh-start-server" />;
}
