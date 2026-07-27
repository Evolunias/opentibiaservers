import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-uk');
}

export default function BaiakClientUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-uk" />;
}
