import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-fresh-start-server-brazil');
}

export default function RealestaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="realesta-fresh-start-server-brazil" />;
}
