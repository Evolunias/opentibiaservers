import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-9-6-fresh-start-server');
}

export default function Evolunia96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-9-6-fresh-start-server" />;
}
