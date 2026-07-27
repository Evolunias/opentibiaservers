import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-europe');
}

export default function BaiakStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-europe" />;
}
