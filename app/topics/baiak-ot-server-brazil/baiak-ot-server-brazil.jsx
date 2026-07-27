import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ot-server-brazil');
}

export default function BaiakOtServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-ot-server-brazil" />;
}
