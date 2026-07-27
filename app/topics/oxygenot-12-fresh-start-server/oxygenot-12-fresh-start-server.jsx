import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-fresh-start-server');
}

export default function Oxygenot12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-fresh-start-server" />;
}
