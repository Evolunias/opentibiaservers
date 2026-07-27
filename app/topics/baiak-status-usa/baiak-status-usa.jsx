import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-usa');
}

export default function BaiakStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-usa" />;
}
