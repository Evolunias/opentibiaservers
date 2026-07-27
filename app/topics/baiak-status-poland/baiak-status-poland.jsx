import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-status-poland');
}

export default function BaiakStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-status-poland" />;
}
