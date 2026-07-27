import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-brazil');
}

export default function FreshStartServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-brazil" />;
}
