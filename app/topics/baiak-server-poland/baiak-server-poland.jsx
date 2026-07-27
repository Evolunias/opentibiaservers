import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-poland');
}

export default function BaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-poland" />;
}
