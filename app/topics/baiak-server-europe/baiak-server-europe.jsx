import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-europe');
}

export default function BaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-europe" />;
}
