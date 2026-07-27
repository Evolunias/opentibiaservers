import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-fresh-start-server');
}

export default function Oxygenot96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-fresh-start-server" />;
}
