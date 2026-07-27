import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-brazil');
}

export default function BaiakStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-brazil" />;
}
