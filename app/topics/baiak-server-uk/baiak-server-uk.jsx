import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-uk');
}

export default function BaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-uk" />;
}
