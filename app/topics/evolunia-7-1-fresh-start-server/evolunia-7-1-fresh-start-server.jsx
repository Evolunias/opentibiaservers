import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-7-1-fresh-start-server');
}

export default function Evolunia71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-7-1-fresh-start-server" />;
}
