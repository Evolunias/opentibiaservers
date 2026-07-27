import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-germany');
}

export default function BaiakStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-germany" />;
}
