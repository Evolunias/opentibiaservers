import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-10-0-fresh-start-server');
}

export default function Oxygenot100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-10-0-fresh-start-server" />;
}
