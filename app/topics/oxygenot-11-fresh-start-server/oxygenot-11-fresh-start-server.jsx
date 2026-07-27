import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-fresh-start-server');
}

export default function Oxygenot11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-fresh-start-server" />;
}
