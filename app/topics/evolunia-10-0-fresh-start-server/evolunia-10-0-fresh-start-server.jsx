import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-10-0-fresh-start-server');
}

export default function Evolunia100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-10-0-fresh-start-server" />;
}
