import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ot-server-list');
}

export default function BestOtServerListKeywordPage() {
  return <StaticKeywordPage slug="best-ot-server-list" />;
}
