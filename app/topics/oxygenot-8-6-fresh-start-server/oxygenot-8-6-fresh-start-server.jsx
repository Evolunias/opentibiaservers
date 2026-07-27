import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-6-fresh-start-server');
}

export default function Oxygenot86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-6-fresh-start-server" />;
}
