import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-north-america');
}

export default function BaiakStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-north-america" />;
}
