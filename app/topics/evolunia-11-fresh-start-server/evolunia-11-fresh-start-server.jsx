import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-11-fresh-start-server');
}

export default function Evolunia11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-11-fresh-start-server" />;
}
