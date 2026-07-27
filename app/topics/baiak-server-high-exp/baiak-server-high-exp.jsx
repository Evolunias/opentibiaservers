import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-high-exp');
}

export default function BaiakServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-high-exp" />;
}
