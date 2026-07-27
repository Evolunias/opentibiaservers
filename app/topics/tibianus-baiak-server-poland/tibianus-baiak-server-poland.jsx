import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-baiak-server-poland');
}

export default function TibianusBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-baiak-server-poland" />;
}
