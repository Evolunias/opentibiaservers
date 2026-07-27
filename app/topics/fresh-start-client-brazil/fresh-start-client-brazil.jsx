import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-brazil');
}

export default function FreshStartClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-brazil" />;
}
