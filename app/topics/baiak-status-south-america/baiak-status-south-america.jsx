import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-south-america');
}

export default function BaiakStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-south-america" />;
}
