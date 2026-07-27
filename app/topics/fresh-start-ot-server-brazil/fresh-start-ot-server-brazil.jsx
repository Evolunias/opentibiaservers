import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ot-server-brazil');
}

export default function FreshStartOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ot-server-brazil" />;
}
