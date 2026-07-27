import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-midhem-server');
}

export default function BaiakMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-midhem-server" />;
}
