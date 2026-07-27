import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-14-fresh-start-server');
}

export default function Evolunia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-14-fresh-start-server" />;
}
