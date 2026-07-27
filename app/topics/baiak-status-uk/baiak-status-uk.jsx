import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-uk');
}

export default function BaiakStatusUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-uk" />;
}
