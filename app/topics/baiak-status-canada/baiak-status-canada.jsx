import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-canada');
}

export default function BaiakStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-canada" />;
}
