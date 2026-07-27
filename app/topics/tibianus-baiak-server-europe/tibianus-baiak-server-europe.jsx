import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-europe');
}

export default function TibianusBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-europe" />;
}
