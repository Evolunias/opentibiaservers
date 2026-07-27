import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-uk');
}

export default function TibianusBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-uk" />;
}
