import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-15-fresh-start-server');
}

export default function Evolunia15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-15-fresh-start-server" />;
}
