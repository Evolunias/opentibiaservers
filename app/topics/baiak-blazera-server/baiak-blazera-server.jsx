import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-blazera-server');
}

export default function BaiakBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-blazera-server" />;
}
