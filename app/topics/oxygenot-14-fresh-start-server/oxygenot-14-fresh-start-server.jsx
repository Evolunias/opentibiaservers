import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-fresh-start-server');
}

export default function Oxygenot14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-fresh-start-server" />;
}
