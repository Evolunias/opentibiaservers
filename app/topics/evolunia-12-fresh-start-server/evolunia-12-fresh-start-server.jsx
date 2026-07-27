import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-12-fresh-start-server');
}

export default function Evolunia12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-12-fresh-start-server" />;
}
