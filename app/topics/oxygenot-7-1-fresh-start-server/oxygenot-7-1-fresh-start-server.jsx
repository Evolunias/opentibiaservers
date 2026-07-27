import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-fresh-start-server');
}

export default function Oxygenot71FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-fresh-start-server" />;
}
