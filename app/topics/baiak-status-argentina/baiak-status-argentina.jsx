import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-argentina');
}

export default function BaiakStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-argentina" />;
}
