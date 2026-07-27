import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-fresh-start-server-brazil');
}

export default function OxygenotFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-fresh-start-server-brazil" />;
}
