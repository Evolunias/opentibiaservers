import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-fresh-start-server');
}

export default function Oxygenot15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-fresh-start-server" />;
}
