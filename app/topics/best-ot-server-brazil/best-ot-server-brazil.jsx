import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-brazil');
}

export default function BestOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-brazil" />;
}
