import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-13-fresh-start-server');
}

export default function Evolunia13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-13-fresh-start-server" />;
}
