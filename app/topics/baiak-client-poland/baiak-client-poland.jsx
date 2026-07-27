import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-poland');
}

export default function BaiakClientPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-poland" />;
}
