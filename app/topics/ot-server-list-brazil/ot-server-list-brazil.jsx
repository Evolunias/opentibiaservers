import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-brazil');
}

export default function OtServerListBrazilKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-brazil" />;
}
