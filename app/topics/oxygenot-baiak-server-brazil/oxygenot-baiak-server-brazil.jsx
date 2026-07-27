import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-baiak-server-brazil');
}

export default function OxygenotBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-baiak-server-brazil" />;
}
