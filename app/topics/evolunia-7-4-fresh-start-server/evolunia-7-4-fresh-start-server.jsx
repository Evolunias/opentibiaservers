import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-4-fresh-start-server');
}

export default function Evolunia74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-4-fresh-start-server" />;
}
