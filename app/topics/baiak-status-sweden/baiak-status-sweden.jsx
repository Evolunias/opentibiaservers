import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-sweden');
}

export default function BaiakStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-sweden" />;
}
