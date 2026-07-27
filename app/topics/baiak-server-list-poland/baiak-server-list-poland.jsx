import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-list-poland');
}

export default function BaiakServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-list-poland" />;
}
