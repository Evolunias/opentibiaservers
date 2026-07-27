import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-usa');
}

export default function TibiantisBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-usa" />;
}
