import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-fresh-start-server-brazil');
}

export default function OlderaFreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-fresh-start-server-brazil" />;
}
