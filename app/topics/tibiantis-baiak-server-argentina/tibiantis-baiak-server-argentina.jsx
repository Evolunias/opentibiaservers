import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-baiak-server-argentina');
}

export default function TibiantisBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-baiak-server-argentina" />;
}
