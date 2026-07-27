import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-8-0-fresh-start-server');
}

export default function Oxygenot80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-8-0-fresh-start-server" />;
}
