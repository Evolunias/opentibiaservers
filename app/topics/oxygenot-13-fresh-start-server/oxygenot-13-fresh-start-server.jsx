import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-fresh-start-server');
}

export default function Oxygenot13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-fresh-start-server" />;
}
